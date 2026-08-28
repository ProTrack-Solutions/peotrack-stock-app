import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { GradientButton } from "@/components/login/gradient-button";
import { TextField } from "@/components/login/text-field";
import { ThemedText } from "@/components/themed-text";
import { LoginRequest } from "@/interfaces/auth.interface";
import { Login } from "@/service/auth.service";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";

/**
 * Credentials form. Uncontrolled and inert by design — no state, validation
 * or submission wiring. That belongs to whichever screen adds auth behavior.
 */
export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    defaultValues: { email: "", password: "", aud: "protrack-stock-app" },
  });

  const onSubmit = async (params: LoginRequest) => {
    try {
      const response = await Login({
        aud: "protrack-stock-app",
        email: params.email,
        password: params.password,
      });
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Status:", error.response?.status);
        console.log("Data:", JSON.stringify(error.response?.data, null, 2));
      }
    }
  };

  return (
    <View className="gap-four">
      <View className="gap-one">
        <ThemedText type="subtitle" className="text-2xl leading-[30px]">
          Entrar na sua conta
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Informe suas credenciais para acessar o painel.
        </ThemedText>
      </View>

      <Controller
        control={control}
        name="email"
        rules={{ required: "E-mail é obrigatório" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="E-mail ou usuário"
            icon="mail-outline"
            placeholder="seu@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.email && (
        <Text style={{ color: "red" }}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Senha é obrigatória",
          minLength: { value: 6, message: "Mínimo 6 caracteres" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Senha"
            icon="lock-closed-outline"
            placeholder="••••••••"
            secureTextEntry
            trailingIcon="eye-outline"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Text style={{ color: "red" }}>{errors.password.message}</Text>
      )}

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-two">
          <View className="h-[18px] w-[18px] items-center justify-center rounded-half bg-ink">
            <Ionicons name="checkmark" size={12} color="#ffffff" />
          </View>
          <ThemedText type="small">Lembrar de mim</ThemedText>
        </View>
        <ThemedText type="linkPrimary">Esqueceu a senha?</ThemedText>
      </View>

      <GradientButton
        label="Entrar"
        icon="log-in-outline"
        onPress={handleSubmit(onSubmit)}
      />

      <View className="flex-row flex-wrap justify-center items-center">
        <ThemedText type="small" themeColor="textSecondary">
          Ainda não tem uma conta?{" "}
        </ThemedText>
        <Pressable>
          <ThemedText type="linkPrimary">Criar conta</ThemedText>
        </Pressable>
      </View>
    </View>
  );
}
