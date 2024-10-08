export default function getListStudentIds(array){
    if(!Array.isArray(array)){
        return [];
    }
    else {
        let ids = []
        array.map((elt) => {
            ids.push(elt.id);
          });
        return ids;
    }
}