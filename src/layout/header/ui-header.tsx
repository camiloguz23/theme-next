import { UiNavbarVertical } from "./navbar-vertical";

interface Prop {
  children: React.ReactNode;
  type?: "vertical" | "horizontal";
}

function UiHeader({ children, type = "vertical" }: Prop) {
  return (
    <>
      {type === "vertical" ? (
        <UiNavbarVertical>{children}</UiNavbarVertical>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default UiHeader;
