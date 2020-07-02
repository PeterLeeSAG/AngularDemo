export enum MatCalType{
    /// <summary>
    /// Single item (aka: 不分色組/碼數計毛)
    /// </summary>
    None = 0,

    /// <summary>
    /// Split Color items (aka: 分色組用毛比例計毛)
    /// </summary>
    ColorComboOnly = 1,

    /// <summary>
    /// Split Sizing items (aka: 分碼數計毛)
    /// </summary>
    SizingOnly = 2,

    /// <summary>
    /// Split both Color & Sizing items (aka: 分色組用毛比例/碼數計毛)
    /// </summary>
    ColorComboSizing = 3,
}