export interface table_data{
    "'_id'" : any,
    "value" : Number,
    "issue" : issue[],
    "project_card" : project_card
 
}
export interface issue {
    "id" : number,
    "title" : string,
    "created_at" : any
}
export interface project_card {
    "card_name" : string
}
// table page 2
export interface table {
    "_id" : any,
    "assignes" : assigne[],
    "issue" : issuee[],
    "project_card" : project_card[],
    "value" : Number
}
export interface assigne {
    "login" : string
}
export interface issuee{
    "title":string
}