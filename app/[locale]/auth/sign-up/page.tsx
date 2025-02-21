"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { post } from "@/lib/fetch";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
  const t = useTranslations();
  // 校验数据
  const registerSchema = z
    .object({
      email: z.string().email({
        message: t("validation.email"),
      }),
      verificationCode: z.string().length(6, {
        message: t("validation.verificationCode"),
      }),
      password: z
        .string()
        .min(8, {
          message: t("validation.password.length"),
        })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)/, {
          message: t("validation.password.format"),
        }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("validation.password.mismatch"),
      path: ["confirmPassword"],
    });
  const router = useRouter();
  const [, setIsVerificationSent] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      verificationCode: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    // 这里应该是您的注册逻辑
    console.log(values);
    toast({
      title: t("toast.registerSuccess.title"),
      description: t("toast.registerSuccess.description"),
    });
    router.push("/login");
  }

  const [countdown, setCountdown] = useState(0);
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // 发送验证码
  const [submitLoading, setSubmitLoading] = useState(false);
  const sendVerificationCode = async () => {
    const email = form.getValues("email");
    if (!email) {
      form.setError("email", { message: t("validation.emailRequired") });
      return;
    }
    setSubmitLoading(true);
    // 这里应该是发送验证码的逻辑
    try {
      await post("email", {
        email: email,
      });
      setIsVerificationSent(true);
      setCountdown(60);
      toast({
        title: t("toast.codeSent.title"),
        description: t("toast.codeSent.description"),
      });
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto absolute inset-0 flex items-center justify-center">
      <Card className="w-[24rem]">
        <CardHeader>
          <CardTitle>{t("card.title")}</CardTitle>
          <CardDescription>{t("card.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.email")}</FormLabel>
                    <FormControl>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="your@email.com"
                          autoComplete="off"
                          {...field}
                        />
                        <Button
                          type="button"
                          onClick={sendVerificationCode}
                          disabled={countdown > 0}
                        >
                          {submitLoading && (
                            <Loader2 className="animate-spin" />
                          )}
                          {countdown > 0
                            ? `${countdown}s`
                            : `${t("form.verificationCode.send")}`}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="verificationCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.verificationCode.label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("form.verificationCode.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.password.label")}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      {t("form.password.description")}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.confirmPassword")}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {t("form.submit")}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Link href="/auth/sign-in">已有账户？登录</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
