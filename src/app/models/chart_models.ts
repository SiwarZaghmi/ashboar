//Column chart logged / size
export interface columnData{
    "_id" : _id[];
    "labels" : labels[];

}
export interface _id{
    "id" : any;
    "title" : string;
}
export interface labels{
    "name" : string;
    "value" : string;
}
// pie chart
export interface pieData{
    "_id" : id[];
    "issues_count" : string;

}
export interface id{
    "action_name" : String;
}
// state chart
export interface state{
    issues_count: Number;
    Month : string
    state : string;
    
}
