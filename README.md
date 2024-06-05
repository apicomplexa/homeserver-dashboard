# Homeserver dashbord 

> Simple dashbord for your homeserver

| decktop                       | mobile                 |
| :---------------------------: | :--------------------: |
| ![decktop](./media/image.png)         | ![mobile](./media/image-1.png) |

# Set-up

1. Install [docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/engine/install/)
2. Clone this repo
```bash
git clone https://github.com/apicomplexa/homeserver-dashboard.git
```
3. Edit `services.json` with your server settings

- Group
    - `title` text in header of services group
    - `icon` id of [licide icon](https://lucide.dev/icons/) for group header
    - `services` list of services in this group
- Service
    - `title` text in card
    - `url` path to service (like `https://example.com`)
    - `logo_path` path to service icon (find it using DevTools in browser or RBM -> Copy link to image). If you want use llcide icon leave this field empty ("")
    - `icon` (_optional_) id of [licide icon](https://lucide.dev/icons/) for service card. Using if `logo_path` is empty, incorrect or unavailable

Structure of `services.json`

```
[
    {
        "title": "Group 1 title",
        "icon": "lucide-icon-for-groupe",
        "services": [
            {
                "title": "Service 1 title",
                "url": "service-1.com",
                "logo_path": "service-1.com/icon.png" // or "" for using icon
                "icon": "lucide-icon-for-service" // optional
            },
            {
                "title": "Service 2 title",
                ...
            }
        ]
    },
    {
        "title": "Group 2 title",
        ...
    }
]
```

4. Build using docker compose 
```bash
docker compose up -d --build
```
5. Dashboard available in `http://localhost:80`
6. Now you can use reverce proxy to get SSl certivicate and use HTTPS


# Credits 

- Cors-anywhere nginx config by [eolme](https://github.com/eolme) ([habr post](https://habr.com/ru/articles/651253/))
- lucide icons
- create react app


# Developing

1. Clone this repo
2. Create `services.json` in `/public/` directory
3. `npm start`

> In that moment in dev mode service running requests are always positive. Couse now in dev mode simple `react-scripts start` is used for hot-reload and other tips, but not custom nginx server for processing requests to services. I'm going to change that someday.