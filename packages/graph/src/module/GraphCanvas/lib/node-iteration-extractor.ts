import type { ZoomTransform } from "d3";
import type { NodeInterface } from "@/types";
import type { GraphCanvasNodeIterationProps } from "../types";

export function nodeIterationExtractor<
  NodeData extends Record<string, unknown>,
  Result extends string | number | boolean | Record<string, unknown> | unknown[] | undefined | null,
>(
  node: NodeInterface<NodeData>,
  i: number,
  nodes: NodeInterface<NodeData>[],
  transform: ZoomTransform,

  option: GraphCanvasNodeIterationProps<NodeData, Result> | Result,
): Result {
  if (typeof option === "function") return option(node, i, nodes, transform);

  return option;
}
