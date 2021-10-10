import * as Components from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../tableItem"

type BananaProps = {
    list: Item[]
}

export const TableArea = ({ list }: BananaProps ) => {
    return(
        <Components.Table>
            <thead>
                <tr>
                    <Components.TableHeadColumn width={100}>Data</Components.TableHeadColumn>
                    <Components.TableHeadColumn width={130}>Categoria</Components.TableHeadColumn>
                    <Components.TableHeadColumn>Título</Components.TableHeadColumn>
                    <Components.TableHeadColumn width={150}>Valor</Components.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((Item, index) => (
                    <TableItem key={index} item={Item} />
                ))}
            </tbody>
        </Components.Table>
    );
}