import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Text } from "@mantine/core"

export default function Home() {
  return (
    <main className="grid h-screen w-screen place-content-center">
      <ThemeSwitch />
      <Text size="xl" my={"xl"}>
        Mantine Demo with Color Scheme
      </Text>
      <Text size={"30px"} fw={700} variant="gradient" gradient={{ from: "violet", to: "grape" }}>
        Will work better when Mantine supports Nextjs 15 and React 19
      </Text>
    </main>
  );
}
