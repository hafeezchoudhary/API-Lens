
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
    analysis = {
        "summary": {
            "total_requests": 0,
            "total_folders": 0
        },
        "methods": {
            "GET": 0,
            "POST": 0,
            "PUT": 0,
            "DELETE": 0,
            "PATCH": 0
        }
    }

    items = json_data["item"]
    traverse_items(items, analysis) 
    

    return analysis


def traverse_items(items, analysis):
 
    for item in items : 
        if "request" in item :
            analysis["summary"]["total_requests"] += 1 
            method = item["request"]["method"] 
            analysis["methods"][method] += 1
        
        if "item" in item :
            analysis["summary"]["total_folders"] += 1 
            traverse_items(item["item"], analysis)   

    return analysis


