export default function removeChildNodesUtils(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
