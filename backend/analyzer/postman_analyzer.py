
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