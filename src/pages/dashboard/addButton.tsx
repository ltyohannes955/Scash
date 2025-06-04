import { Button } from "@mantine/core";
import { Plus } from "lucide-react";

export function AddButton() {
  return (
    <>
      <Button
        radius={"100%"}
        size="md"
        style={{
          position: "fixed",
          bottom: "7rem",
          right: "2rem",
          width: "4rem",
          height: "4rem",
          padding: 0,
        }}
      >
        <Plus />
      </Button>
    </>
  );
}
