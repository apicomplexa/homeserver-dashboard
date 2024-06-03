# Homeserver dashbord 

> Simple dashbord for your homeserver

## Usage

1. Donwload last release
2. In dashboard folder found `services.json`
3. Edit its using this template with apps available on your server

```services.json
[
    {
    # group of services 
    "title": "Group 1",
    "icon": "component", # supports lucide icons
    "services": 
        [        # list of services on your server
            {
                "title": "Service",
                "url": "https://service.com",
                "logo_path": "https://service.com/favicon.svg"  
                    # it could be url to logo
                    # or path to image on this folder "./path/to/img.png"
                    # tip - is better to use images not more than 100x100px for logo
            },{
                ...
            }
        ]
    },{
        ...
    }
]
```
4. Use nginx or other web-server for make dashboard available

