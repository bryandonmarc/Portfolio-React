import { IconSearch } from "@tabler/icons";
import { HeaderControl } from "@components/atoms";

interface SearchControlProps {
  onClick(): void;
}

export function SearchControlMobile({ onClick }: SearchControlProps) {
  return (
    <HeaderControl onClick={() => onClick()} tooltip="Search">
      {<IconSearch size={20} stroke={1.5} />}
    </HeaderControl>
  );
}
