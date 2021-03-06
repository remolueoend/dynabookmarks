import { BookmarksNode } from "lib/trees"
import { PureComponent } from "react"
import styled from "styled-components"
import { BookmarksView } from "../bookmarks-view/BookmarksView"

export interface ExplorerViewProps {
  style?: {}
  className?: string
}

const ExplorerViewBase = styled.div``

export class ExplorerView extends PureComponent<ExplorerViewProps> {
  public render() {
    const { style, className } = this.props
    return (
      <ExplorerViewBase style={style} className={className}>
        <BookmarksView onSelect={openNode} />
      </ExplorerViewBase>
    )
  }
}

/**
 * Tries to open the url of the given node, either in the current tab or new tab.
 * This function does nothing if the given node does not have a href data attribute
 */
function openNode(node: BookmarksNode, newTab: boolean) {
  if (node.data.href) {
    if (newTab) {
      browser.tabs.create({ url: node.data.href })
    } else {
      browser.tabs.update({ url: node.data.href })
    }
    window.close()
  }
}
