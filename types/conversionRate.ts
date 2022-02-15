export type ConversionRate = {
    id: string
    f0_member_uu: number
    f1_uu: number
    f2_uu: number
    next_loyal_uu: number
    loyal_uu: number
    f2_conversion_rate: number
    next_loyal_conversion_rate: number
    loyal_conversion_rate: number
    month: number
    year: number
    created_at?: Date;
    updated_at?: Date;
    organization_id: string
    project_id: string
}