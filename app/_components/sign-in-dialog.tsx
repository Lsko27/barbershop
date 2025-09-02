import Image from "next/image"
import { Button } from "./ui/button"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          alt="Fazer login com o Google"
          height={18}
          width={18}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
