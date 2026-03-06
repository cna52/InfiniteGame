import { AppShell, Burger, Group, Text, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function App() {
  // This hook manages the open/close state of the mobile menu
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ 
        width: 300, 
        breakpoint: 'sm', 
        collapsed: { mobile: !opened } 
      }}
      aside={{ 
        width: 300, 
        breakpoint: 'md', 
        collapsed: { desktop: false, mobile: true } 
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          {/* The Burger shows up only on small screens to toggle the navbar */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={700} size="lg">Infinity Game</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Text fw={500} mb="md">Character Status</Text>
        <Paper withBorder p="sm" radius="md">
          Placeholder for Vitals & Inventory
        </Paper>
      </AppShell.Navbar>

      <AppShell.Main>
        <Text fw={500} mb="md">Chat Feed</Text>
        <Paper withBorder p="sm" radius="md" h="80vh">
          Placeholder for Chat Messages
        </Paper>
      </AppShell.Main>

      <AppShell.Aside p="md">
        <Text fw={500} mb="md">Visual Assets</Text>
        <Paper withBorder p="sm" radius="md" h="200px">
          Placeholder for Location Image
        </Paper>
      </AppShell.Aside>
    </AppShell>
  );
}