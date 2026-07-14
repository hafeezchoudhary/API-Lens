
def analyze_collection(json_data) :
    analysis = {
        "collection": {},

    }
    if "info" not in json_data :
        return {
            "success": False,
            "error": "Missing info section"
        }
    
    info = json_data.get("info")

    analysis["collection"]["name"] = info.get("name")
    analysis["collection"]["schema"] = info.get("schema")
    analysis["collection"]["postman_id"] = info.get("_postman_id")

    return analysis


def analyze_summary(json_data):
    summary = {
        "summary": {
            "total_requests": 0,
            "total_folders": 0
        }
    }

    items = json_data["item"]
    request, folder = count_items(items)  
    summary["summary"]["total_requests"] = request
    summary["summary"]["total_folders"] = folder
    

    return summary


def count_items(items):
    request_count = 0
    folder_count = 0
 
    for item in items : 
        if "request" in item :
            request_count += 1 
        
        if "item" in item :
            folder_count += 1 
            sub_requests, sub_folders = count_items(item["item"])
            request_count += sub_requests   
            folder_count += sub_folders  

    return request_count, folder_count


