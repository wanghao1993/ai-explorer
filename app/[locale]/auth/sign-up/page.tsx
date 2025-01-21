"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { Link } from "@/i18n/routing";

const registerSchema = z
  .object({
    email: z.string().email({
      message: "请输入有效的电子邮箱地址。",
    }),
    verificationCode: z.string().length(6, {
      message: "验证码必须是6位数字。",
    }),
    password: z
      .string()
      .min(8, {
        message: "密码至少需要8个字符。",
      })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, {
        message: "密码至少需要包含一个字母和一个数字。",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "密码和确认密码不匹配。",
    path: ["confirmPassword"],
  });
export default function RegisterPage() {
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
      title: "注册成功",
      description: "您已成功注册账户。",
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

  const sendVerificationCode = async () => {
    const email = form.getValues("email");
    if (!email) {
      form.setError("email", { message: "请先输入电子邮箱地址" });
      return;
    }
    // 这里应该是发送验证码的逻辑
    console.log(`发送验证码到 ${email}`);
    setIsVerificationSent(true);
    setCountdown(60);
    toast({
      title: "验证码已发送",
      description: "请检查您的邮箱。",
    });
  };

  return (
    <div className="max-w-md mx-auto absolute inset-0 flex items-center justify-center">
      <Card className="w-[24rem]">
        <CardHeader>
          <CardTitle>注册</CardTitle>
          <CardDescription>创建一个新账户</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>电子邮箱</FormLabel>
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
                          {countdown > 0 ? `${countdown}s` : "发送验证码"}
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
                    <FormLabel>验证码</FormLabel>
                    <FormControl>
                      <Input placeholder="6位数字验证码" {...field} />
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
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      密码至少需要8个字符，包含字母和数字。
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
                    <FormLabel>确认密码</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                注册
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
