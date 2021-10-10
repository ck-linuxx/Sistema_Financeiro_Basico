import * as Style from "./styles"
import { Item } from "../../types/Item"
import { formatDate } from "../../helpers/dateFilter"
import { categories } from "../../data/categories"

type BananaProps = {
    item: Item;
}

export const TableItem = ({ item }: BananaProps) => {
    return(
        <Style.TableLine>
            <Style.TableColumn>{formatDate(item.date)}</Style.TableColumn>
            <Style.TableColumn>
                <Style.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Style.Category>
            </Style.TableColumn>
            <Style.TableColumn>{item.title}</Style.TableColumn>
            <Style.TableColumn>
                <Style.Value color={categories[item.category].expense ? "red" : "green"}>
                    R$ {item.value}
                </Style.Value>
            </Style.TableColumn>
        </Style.TableLine>
    )
}