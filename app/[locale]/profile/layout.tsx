import Container from "@/components/elements/Container";
import MenuLink from "@/components/ui/MenuLink";
import { Flex } from "antd";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg1 pt-8 pb-16">
      <Container>
        <div className="grid grid-cols-[1fr_3fr] gap-6">
          <Flex vertical className="bg-white p-3 gap-2 rounded-lg h-fit">
            <MenuLink href="/profile">Profile</MenuLink>
            <MenuLink href="/profile/my-visits">My visitis</MenuLink>
            <MenuLink href="/profile/test-results">Test results</MenuLink>
            <MenuLink href="/profile/doctor-prescriptions">
              Doctor prescriptions
            </MenuLink>
            <MenuLink href="/profile/wallet">Wallet</MenuLink>
            <MenuLink href="/">Log Out</MenuLink>
          </Flex>
          <div>{children}</div>
        </div>
      </Container>
    </div>
  );
}
