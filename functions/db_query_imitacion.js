export const db_query_imitacion={
    insert:(db,data,where)=>{
        const db_copy=[...db];
        const newRecord=Object.fromEntries(Object.keys(db?.[0] ?? {}).map(x=>[x, '']));
        db_copy.push({ ...newRecord, ...data, id:null });
        return db_copy
    },
    update:(db,data,where)=>{
        const db_copy=_.map([...db], item=>{
            if(_.isMatch(item, where)){
                return { ...item, ...data };
            }
            return item;
        });
        return db_copy
    },
    delete:(db,data,where)=>{
        return _.filter([...db], item=>!_.isMatch(item, where));
    },
}