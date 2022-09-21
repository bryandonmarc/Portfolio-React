import { Text } from "@mantine/core";
import { openModal as createModal } from "@mantine/modals";

export const openModal = () =>
  createModal({
    title: "⚠ WIP ⚠ Under Construction",
    children: (
      <Text size="sm">This part is not fully functional yet, sorry!</Text>
    ),
    centered: true,
  });
