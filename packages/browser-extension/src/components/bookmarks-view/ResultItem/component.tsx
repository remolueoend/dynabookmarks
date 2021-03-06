import { HTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { getThemeVar, styledWithProps } from "theme"

export interface ResultItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  url?: string
  path: string[]
  selected: boolean
}

const Title = styled.h4`
  margin-bottom: 0px;
  white-space: nowrap;
`
const Url = styled.span`
  margin: 0 10px;
  font-size: 10px;
  color: ${getThemeVar("normal-color")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Path = styled.span``
const FlexBox = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
`

const ResultItemBase = styledWithProps<
  { selected: boolean } & HTMLAttributes<HTMLDivElement>
>()(styled.div)`
  width: 100%;
  overflow: hidden;
  padding: 0 5px;
  &: hover {
    background-color: ${getThemeVar("normal-color")}
  }
  
  ${({ selected }) =>
    selected &&
    css`
      color: white;
      background-color: ${getThemeVar("primary-color")};
      & > div > h4,
      & > div > span {
        color: white;
      }
    `}
`

export const ResultItem: React.SFC<ResultItemProps> = ({
  title,
  url,
  path,
  selected,
  ...rootDivProps
}) => (
  <ResultItemBase selected={selected} {...rootDivProps}>
    <FlexBox>
      <Title>{title}</Title>
      <Url>{url}</Url>
    </FlexBox>
    <Path>{path.slice(1).join("/")}</Path>
  </ResultItemBase>
)
