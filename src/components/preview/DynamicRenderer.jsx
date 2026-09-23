import UIHeading from "../ui/UIHeading";
import UIText from "../ui/UIText";
import UICard from "../ui/UICard";
import UIButton from "../ui/UIButton";
import UIInput from "../ui/UIInput";
import UIGrid from "../ui/UIGrid";
import UIContainer from "../ui/UIContainer";

const componentMap = {
  heading: UIHeading,
  text: UIText,
  card: UICard,
  button: UIButton,
  input: UIInput,
  grid: UIGrid,
  container: UIContainer,
};

function DynamicRenderer({ node }) {
  if (!node) return null;

  const Component = componentMap[node.type];

  if (!Component) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
        Unknown component: {node.type}
      </div>
    );
  }

  const children = node.children?.map((child, index) => (
    <DynamicRenderer key={index} node={child} />
  ));

  return (
    <Component {...node.props}>
      {children}
    </Component>
  );
}

export default DynamicRenderer;