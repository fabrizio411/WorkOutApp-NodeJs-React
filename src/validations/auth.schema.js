import { z } from 'zod'

export const registerSchema = z.object({
    username: z
        .string({
            required_error: 'Username is required'
        })
        .min(3, {
            message: 'Username must be an least 3 characters'
        })
        .max(20, {
            message: 'Username must be under 20 characters'
        }),
    email: z
        .string({
            required_error: 'Email is required'
        })
        .email({
            message: 'Invalid email'
        }),
    password: z
        .string({
            required_error: 'Password is required'
        })
        .min(6, {
            message: 'Password must be an least 6 characters'
        })
})

export const loginSchema = z.object({
    username: z
        .string({
            required_error: 'Email is required'
        }),
    password: z
        .string({
            required_error: 'Password is required'
        })
        .min(6, {
            message: 'Password must be an least 6 characters'
        })
})