---
title: Notes/Tree
---

## POST

Not implemented, use hierarchy endpoint

## GET

If the file is too large, I found the `--max-time 120` flag didn't help:

```bash
nu
curl http://localhost:37240/notes/tree  | from json | save /tmp/f.json
```

```python
import json

with open('/tmp/f.json') as f:
    data = json.load(f)

# Print the ids
for item in data:
    print(item['id'])
```

With bash:

```bash
curl http://localhost:37240/notes/tree | jq
```

```json title="RESULT"
[
  {
    "id": 4,
    "title": "Project Planning Template",
    "created_at": "2024-11-01T12:15:00.820574",
    "modified_at": "2024-11-01T12:15:00.820574",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 7,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:15:24.356228",
    "modified_at": "2024-11-01T12:15:24.356230",
    "hierarchy_type": null,
    "children": [
      {
        "id": 19,
        "title": "Child Note",
        "created_at": "2024-11-01T12:15:24.383291",
        "modified_at": "2024-11-01T12:15:24.383295",
        "hierarchy_type": "block",
        "children": []
      },
      {
        "id": 3,
        "title": "Meeting Note Template",
        "created_at": "2024-11-01T12:15:00.820574",
        "modified_at": "2024-11-01T12:15:00.820574",
        "hierarchy_type": "block",
        "children": [
          {
            "id": 1,
            "title": "Welcome to DraftSmith",
            "created_at": "2024-11-01T12:15:00.820574",
            "modified_at": "2024-11-01T12:15:00.820574",
            "hierarchy_type": "block",
            "children": [
              {
                "id": 2,
                "title": "Getting Started Guide",
                "created_at": "2024-11-01T12:15:00.820574",
                "modified_at": "2024-11-01T12:15:00.820574",
                "hierarchy_type": "subpage",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:15:24.356619",
    "modified_at": "2024-11-01T12:15:24.356620",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 10,
    "title": "Test Note",
    "created_at": "2024-11-01T12:15:24.362089",
    "modified_at": "2024-11-01T12:15:24.362090",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 11,
    "title": "Updated Test Note",
    "created_at": "2024-11-01T12:15:24.362555",
    "modified_at": "2024-11-01T12:15:24.385052",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 21,
    "title": "Child Note",
    "created_at": "2024-11-01T12:15:24.384784",
    "modified_at": "2024-11-01T12:15:24.384784",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 26,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:19:55.577877",
    "modified_at": "2024-11-01T12:19:55.577879",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 28,
    "title": "Test Note",
    "created_at": "2024-11-01T12:19:55.578348",
    "modified_at": "2024-11-01T12:19:55.578349",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 29,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:19:55.578092",
    "modified_at": "2024-11-01T12:19:55.578093",
    "hierarchy_type": null,
    "children": [
      {
        "id": 39,
        "title": "Child Note",
        "created_at": "2024-11-01T12:19:55.597176",
        "modified_at": "2024-11-01T12:19:55.597177",
        "hierarchy_type": "block",
        "children": []
      }
    ]
  },
  {
    "id": 31,
    "title": "Updated Test Note",
    "created_at": "2024-11-01T12:19:55.581714",
    "modified_at": "2024-11-01T12:19:55.602585",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 37,
    "title": "Child Note",
    "created_at": "2024-11-01T12:19:55.596025",
    "modified_at": "2024-11-01T12:19:55.596027",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 45,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:50:39.583611",
    "modified_at": "2024-11-01T12:50:39.583613",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 46,
    "title": "Test Note",
    "created_at": "2024-11-01T12:50:39.585720",
    "modified_at": "2024-11-01T12:50:39.585720",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 47,
    "title": "Updated Test Note",
    "created_at": "2024-11-01T12:50:39.585759",
    "modified_at": "2024-11-01T12:50:39.608676",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 48,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:50:39.586600",
    "modified_at": "2024-11-01T12:50:39.586601",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 55,
    "title": "Child Note",
    "created_at": "2024-11-01T12:50:39.601803",
    "modified_at": "2024-11-01T12:50:39.601804",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 60,
    "title": "Child Note",
    "created_at": "2024-11-01T12:50:39.608565",
    "modified_at": "2024-11-01T12:50:39.608565",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 66,
    "title": "Test Note",
    "created_at": "2024-11-01T12:52:05.465807",
    "modified_at": "2024-11-01T12:52:05.465808",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 67,
    "title": "Updated Test Note",
    "created_at": "2024-11-01T12:52:05.465518",
    "modified_at": "2024-11-01T12:52:05.484565",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 68,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:52:05.466156",
    "modified_at": "2024-11-01T12:52:05.466157",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 70,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:52:05.467197",
    "modified_at": "2024-11-01T12:52:05.467198",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 77,
    "title": "Child Note",
    "created_at": "2024-11-01T12:52:05.483640",
    "modified_at": "2024-11-01T12:52:05.483641",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 78,
    "title": "Child Note",
    "created_at": "2024-11-01T12:52:05.483458",
    "modified_at": "2024-11-01T12:52:05.483459",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 88,
    "title": "Updated Test Note",
    "created_at": "2024-11-01T12:53:37.130037",
    "modified_at": "2024-11-01T12:53:37.159762",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 89,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:53:37.130181",
    "modified_at": "2024-11-01T12:53:37.130182",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 90,
    "title": "Parent Note",
    "created_at": "2024-11-01T12:53:37.132233",
    "modified_at": "2024-11-01T12:53:37.132234",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 91,
    "title": "Test Note",
    "created_at": "2024-11-01T12:53:37.134891",
    "modified_at": "2024-11-01T12:53:37.134893",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 100,
    "title": "Child Note",
    "created_at": "2024-11-01T12:53:37.154184",
    "modified_at": "2024-11-01T12:53:37.154185",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 101,
    "title": "Child Note",
    "created_at": "2024-11-01T12:53:37.153785",
    "modified_at": "2024-11-01T12:53:37.153787",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 106,
    "title": "Test Note",
    "created_at": "2024-11-02T00:19:21.658621",
    "modified_at": "2024-11-02T00:19:21.658622",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 107,
    "title": "Updated Test Note",
    "created_at": "2024-11-02T00:19:21.658550",
    "modified_at": "2024-11-02T00:19:21.680525",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 108,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:19:21.659005",
    "modified_at": "2024-11-02T00:19:21.659006",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 110,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:19:21.659325",
    "modified_at": "2024-11-02T00:19:21.659326",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 118,
    "title": "Child Note",
    "created_at": "2024-11-02T00:19:21.679398",
    "modified_at": "2024-11-02T00:19:21.679400",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 120,
    "title": "Child Note",
    "created_at": "2024-11-02T00:19:21.680163",
    "modified_at": "2024-11-02T00:19:21.680164",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 125,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:19:40.585459",
    "modified_at": "2024-11-02T00:19:40.585462",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 127,
    "title": "Test Note",
    "created_at": "2024-11-02T00:19:40.589833",
    "modified_at": "2024-11-02T00:19:40.589834",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 129,
    "title": "Updated Test Note",
    "created_at": "2024-11-02T00:19:40.590190",
    "modified_at": "2024-11-02T00:19:40.618630",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 130,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:19:40.590220",
    "modified_at": "2024-11-02T00:19:40.590221",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 132,
    "title": "Child Note",
    "created_at": "2024-11-02T00:19:40.599286",
    "modified_at": "2024-11-02T00:19:40.599288",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 141,
    "title": "Child Note",
    "created_at": "2024-11-02T00:19:40.613091",
    "modified_at": "2024-11-02T00:19:40.613094",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 147,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:19:48.386887",
    "modified_at": "2024-11-02T00:19:48.386888",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 148,
    "title": "Updated Test Note",
    "created_at": "2024-11-02T00:19:48.386653",
    "modified_at": "2024-11-02T00:19:48.406136",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 149,
    "title": "Test Note",
    "created_at": "2024-11-02T00:19:48.387015",
    "modified_at": "2024-11-02T00:19:48.387016",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 150,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:19:48.388322",
    "modified_at": "2024-11-02T00:19:48.388323",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 152,
    "title": "Child Note",
    "created_at": "2024-11-02T00:19:48.398674",
    "modified_at": "2024-11-02T00:19:48.398675",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 161,
    "title": "Child Note",
    "created_at": "2024-11-02T00:19:48.406599",
    "modified_at": "2024-11-02T00:19:48.406600",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 165,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:46:17.638610",
    "modified_at": "2024-11-02T00:46:17.638613",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 167,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:46:17.638735",
    "modified_at": "2024-11-02T00:46:17.638736",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 168,
    "title": "Updated Test Note",
    "created_at": "2024-11-02T00:46:17.642913",
    "modified_at": "2024-11-02T00:46:17.666113",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 169,
    "title": "Test Note",
    "created_at": "2024-11-02T00:46:17.644242",
    "modified_at": "2024-11-02T00:46:17.644242",
    "hierarchy_type": null,
    "children": [
      {
        "id": 172,
        "title": "Child Note",
        "created_at": "2024-11-02T00:46:17.660147",
        "modified_at": "2024-11-02T00:46:17.660149",
        "hierarchy_type": "block",
        "children": []
      }
    ]
  },
  {
    "id": 175,
    "title": "Child Note",
    "created_at": "2024-11-02T00:46:17.663570",
    "modified_at": "2024-11-02T00:46:17.663571",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 185,
    "title": "Updated Test Note",
    "created_at": "2024-11-02T00:58:26.033162",
    "modified_at": "2024-11-02T00:58:26.052720",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 187,
    "title": "Test Note",
    "created_at": "2024-11-02T00:58:26.037468",
    "modified_at": "2024-11-02T00:58:26.037469",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 190,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:58:26.037618",
    "modified_at": "2024-11-02T00:58:26.037618",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 191,
    "title": "Parent Note",
    "created_at": "2024-11-02T00:58:26.037618",
    "modified_at": "2024-11-02T00:58:26.037618",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 198,
    "title": "Child Note",
    "created_at": "2024-11-02T00:58:26.058516",
    "modified_at": "2024-11-02T00:58:26.058518",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 200,
    "title": "Child Note",
    "created_at": "2024-11-02T00:58:26.059373",
    "modified_at": "2024-11-02T00:58:26.059373",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 206,
    "title": "Parent Note",
    "created_at": "2024-11-02T01:12:29.742341",
    "modified_at": "2024-11-02T01:12:29.742345",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 207,
    "title": "Test Note",
    "created_at": "2024-11-02T01:12:29.743605",
    "modified_at": "2024-11-02T01:12:29.743606",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 209,
    "title": "Updated Test Note",
    "created_at": "2024-11-02T01:12:29.745244",
    "modified_at": "2024-11-02T01:12:29.769505",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 210,
    "title": "Parent Note",
    "created_at": "2024-11-02T01:12:29.745235",
    "modified_at": "2024-11-02T01:12:29.745236",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 219,
    "title": "Child Note",
    "created_at": "2024-11-02T01:12:29.767321",
    "modified_at": "2024-11-02T01:12:29.767324",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 221,
    "title": "Child Note",
    "created_at": "2024-11-02T01:12:29.770731",
    "modified_at": "2024-11-02T01:12:29.770733",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 227,
    "title": "Parent Note",
    "created_at": "2024-11-02T01:20:49.945263",
    "modified_at": "2024-11-02T01:20:49.945264",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 229,
    "title": "Test Note",
    "created_at": "2024-11-02T01:20:49.946701",
    "modified_at": "2024-11-02T01:20:49.946702",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 230,
    "title": "Updated Test Note",
    "created_at": "2024-11-02T01:20:49.949342",
    "modified_at": "2024-11-02T01:20:49.969079",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 231,
    "title": "Parent Note",
    "created_at": "2024-11-02T01:20:49.952835",
    "modified_at": "2024-11-02T01:20:49.952836",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 238,
    "title": "Child Note",
    "created_at": "2024-11-02T01:20:49.966496",
    "modified_at": "2024-11-02T01:20:49.966497",
    "hierarchy_type": null,
    "children": []
  },
  {
    "id": 242,
    "title": "Child Note",
    "created_at": "2024-11-02T01:20:49.977191",
    "modified_at": "2024-11-02T01:20:49.977193",
    "hierarchy_type": null,
    "children": []
  }
]
```

