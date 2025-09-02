"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

interface CrateBookingParams {
  userId: string
  serviceId: string
  date: Date
}

export const CreateBooking = async (params: CrateBookingParams) => {
  await db.booking.create({
    data: params,
  })
  revalidatePath("/barbershops/[id]")
}
