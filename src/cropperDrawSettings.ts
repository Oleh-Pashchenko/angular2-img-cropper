import { CornerMarker } from './model/cornerMarker';
export class CropperDrawSettings {
    public strokeWidth: number = 1;
    public dragMarkerVisible: boolean = true;
    public strokeColor: string = "rgba(255,255,255,1)";
    public fillColor: string = "rgba(255,255,1,.7)";
    public dragMarkerColor: string = "rgba(255,255,255,1)";
    public cornerStyle: CornerStyle = CornerStyle.Square;
}

export enum CornerStyle {
    Arrow,
    Square
}