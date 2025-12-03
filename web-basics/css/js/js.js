function season(weathe)
{
    if(weathe =="summer"){
        return "hot";
    }
    if(weathe=="winter"){
        return "cold";
    }
    if(weathe=="rainy"){
        return "rains";
    }
}

console.log(season("winter"));