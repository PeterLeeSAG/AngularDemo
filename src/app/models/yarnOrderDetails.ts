import { MaterialYarn } from './materialYarn';
import { StyleInfo } from './styleInfo';
import { SizeItem } from './size';
import { Combo } from './combo';
import { ColorOrder } from './colorOrder';
import { ComboOrderDetail } from './comboOrderDetail';

export class YarnOrderModel {
    public styleInfoList : StyleInfo[];
    public materialYarns : MaterialYarn[];
    public sizes : SizeItem[];
    public combos : Combo[];
    public colorOrders : ColorOrder[];
    public comboOrderDetails : ComboOrderDetail[];
}