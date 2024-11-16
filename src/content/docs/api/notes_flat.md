---
title: Notes/Flat
---

## POST

```bash title="Flat POST"
curl -X POST http://localhost:37240/notes/flat \
    -H "Content-Type: application/json" \
    -d '{"title": "My New Note", "content": "This is the content of my note"}' \|
        jq
```

RESULT:

```json title="RESULT"
{
  "id": 239,
  "title": "My New Note",
  "content": "This is the content of my note",
  "created_at": "2024-11-01T05:25:52.287612",
  "modified_at": "2024-11-01T05:25:52.287614"
}
```

## GET
### Single
#### Only Metadata

```bash
curl http://localhost:37240/notes/flat/1?exclude_content=true | jq
```

```json title="RESULT"
{
  "id": 1,
  "title": "Welcome to DraftSmith",
  "content": "Welcome to your new note-taking system!\n\nDraftSmith helps you organize your thoughts, tasks, and knowledge. This note will show you the basic features available.\\n\\nKey Features:\\n- Hierarchical notes\\n- Tags and categories\\n- Task management\\n- Full-text search\\n- Asset attachments",
  "created_at": "2024-11-01T06:38:44.905463",
  "modified_at": "2024-11-01T06:38:44.905463"
}
```

#### With Content

```bash
curl http://localhost:37240/notes/flat/1 | jq
```

```json title="RESULT"
{
  "id": 1,
  "title": "Welcome to DraftSmith",
  "content": "Welcome to your new note-taking system!\n\nDraftSmith helps you organize your thoughts, tasks, and knowledge. This note will show you the basic features available.\\n\\nKey Features:\\n- Hierarchical notes\\n- Tags and categories\\n- Task management\\n- Full-text search\\n- Asset attachments",
  "created_at": "2024-11-01T02:52:10.268053",
  "modified_at": "2024-11-01T02:52:10.268053"
}
```

### All
#### With Content

```bash
curl http://localhost:37240/notes/flat | jq
```

```json title="RESULT"
[
  {
    "id": 1,
    "title": "Welcome to DraftSmith",
    "content": "Welcome to your new note-taking system!\n\nDraftSmith helps you organize your thoughts, tasks, and knowledge. This note will show you the basic features available.\\n\\nKey Features:\\n- Hierarchical notes\\n- Tags and categories\\n- Task management\\n- Full-text search\\n- Asset attachments",
    "created_at": "2024-11-01T02:52:10.268053",
    "modified_at": "2024-11-01T02:52:10.268053"
  },
  {
    "id": 2,
    "title": "Getting Started Guide",
    "content": "# Quick Start Guide\n\n1. **Creating Notes**\\n   - Use the CLI to create new notes\\n   - Notes support markdown formatting\\n\\n2. **Organization**\\n   - Tag notes for easy finding\\n   - Create hierarchies with parent/child relationships\\n\\n3. **Tasks**\\n   - Convert any note to a task\\n   - Set priorities and deadlines\\n   - Track time spent\\n\\n4. **Search**\\n   - Full-text search across all notes\\n   - Filter by tags or attributes",
    "created_at": "2024-11-01T02:52:10.268053",
    "modified_at": "2024-11-01T02:52:10.268053"
  },
  {
    "id": 3,
    "title": "Meeting Note Template",
    "content": "# Meeting: [Title]\nDate: [Date]\\nParticipants: [Names]\\n\\n## Agenda\\n1. \\n2. \\n3. \\n\\n## Discussion\\n\\n## Action Items\\n- [ ] \\n- [ ] \\n\\n## Next Steps\\n\\n## Notes",
    "created_at": "2024-11-01T02:52:10.268053",
    "modified_at": "2024-11-01T02:52:10.268053"
  },
  {
    "id": 4,
    "title": "Project Planning Template",
    "content": "# Project: [Name]\n\n## Overview\\n[Brief description]\\n\\n## Objectives\\n1. \\n2. \\n\\n## Timeline\\n- Start: \\n- Milestones:\\n- Deadline: \\n\\n## Resources\\n\\n## Risks\\n\\n## Status Updates",
    "created_at": "2024-11-01T02:52:10.268053",
    "modified_at": "2024-11-01T02:52:10.268053"
  },
  {
    "id": 231,
    "title": "My New Note",
    "content": "This is the content of my note",
    "created_at": "2024-11-01T05:16:39.730138",
    "modified_at": "2024-11-01T05:16:39.730140"
  }
]
```

#### Only Metadata

```bash
curl http://localhost:37240/notes/flat?exclude_content=true | jq
```

```json title="RESULT"
[
  {
    "id": 1,
    "title": "Welcome to DraftSmith",
    "content": "Welcome to your new note-taking system!\n\nDraftSmith helps you organize your thoughts, tasks, and knowledge. This note will show you the basic features available.\\n\\nKey Features:\\n- Hierarchical notes\\n- Tags and categories\\n- Task management\\n- Full-text search\\n- Asset attachments",
    "created_at": "2024-11-01T06:38:44.905463",
    "modified_at": "2024-11-01T06:38:44.905463"
  },
  {
    "id": 2,
    "title": "Getting Started Guide",
    "content": "# Quick Start Guide\n\n1. **Creating Notes**\\n   - Use the CLI to create new notes\\n   - Notes support markdown formatting\\n\\n2. **Organization**\\n   - Tag notes for easy finding\\n   - Create hierarchies with parent/child relationships\\n\\n3. **Tasks**\\n   - Convert any note to a task\\n   - Set priorities and deadlines\\n   - Track time spent\\n\\n4. **Search**\\n   - Full-text search across all notes\\n   - Filter by tags or attributes",
    "created_at": "2024-11-01T06:38:44.905463",
    "modified_at": "2024-11-01T06:38:44.905463"
  },
  {
    "id": 3,
    "title": "Meeting Note Template",
    "content": "# Meeting: [Title]\nDate: [Date]\\nParticipants: [Names]\\n\\n## Agenda\\n1. \\n2. \\n3. \\n\\n## Discussion\\n\\n## Action Items\\n- [ ] \\n- [ ] \\n\\n## Next Steps\\n\\n## Notes",
    "created_at": "2024-11-01T06:38:44.905463",
    "modified_at": "2024-11-01T06:38:44.905463"
  },
  {
    "id": 4,
    "title": "Project Planning Template",
    "content": "# Project: [Name]\n\n## Overview\\n[Brief description]\\n\\n## Objectives\\n1. \\n2. \\n\\n## Timeline\\n- Start: \\n- Milestones:\\n- Deadline: \\n\\n## Resources\\n\\n## Risks\\n\\n## Status Updates",
    "created_at": "2024-11-01T06:38:44.905463",
    "modified_at": "2024-11-01T06:38:44.905463"
  },
  {
    "id": 66,
    "title": "Test Note",
    "content": "This is a test note",
    "created_at": "2024-11-01T06:42:02.987419",
    "modified_at": "2024-11-01T06:42:02.987420"
  },
  {
    "id": 67,
    "title": "Updated Test Note",
    "content": "This is an updated test note",
    "created_at": "2024-11-01T06:42:02.986639",
    "modified_at": "2024-11-01T06:42:03.012362"
  },
  {
    "id": 35,
    "title": "Test Note",
    "content": "This is a test note",
    "created_at": "2024-11-01T06:39:07.426641",
    "modified_at": "2024-11-01T06:39:07.426644"
  },
  {
    "id": 34,
    "title": "Updated Test Note",
    "content": "This is an updated test note",
    "created_at": "2024-11-01T06:39:07.426737",
    "modified_at": "2024-11-01T06:39:07.443980"
  },
  {
    "id": 49,
    "title": "Test Note",
    "content": "This is a test note",
    "created_at": "2024-11-01T06:41:37.549532",
    "modified_at": "2024-11-01T06:41:37.549535"
  },
  {
    "id": 50,
    "title": "Updated Test Note",
    "content": "This is an updated test note",
    "created_at": "2024-11-01T06:41:37.549826",
    "modified_at": "2024-11-01T06:41:37.573470"
  }
]
```

## UPDATE
### Single

```bash
 curl -X PUT http://localhost:37240/notes/flat/1 \
   -H "Content-Type: application/json" \
   -d '{"title": "Updated Title", "content": "Updated content for my note"}' | jq
```

```json title="RESULT"
{
  "id": 1,
  "title": "Updated Title",
  "content": "Updated content for my note",
  "created_at": "2024-11-01T02:52:10.268053",
  "modified_at": "2024-11-01T05:33:02.301640"
}
```

### Batch

This endpoint is used by the client to implement the logic needed for the `Push` command in the cli.

NOTE that the title is automatically set as `h1` by the databse.

```bash
curl -X PUT http://localhost:37240/notes/flat/batch \
  -H "Content-Type: application/json" \
  -d '{
    "updates": [
      [1, {
        "content": "# Heading 1\nUpdated Content 1"
      }],
      [2, {
        "content": "# Heading 2\nUpdated Content 2"
      }]
    ]
  }' | jq
```

```json title="RESULT"
{
  "updated": [
    {
      "id": 1,
      "title": "Heading 1",
      "content": "# Heading 1\nUpdated Content 1",
      "created_at": "2024-11-03T02:17:20.464899",
      "modified_at": "2024-11-03T04:06:34.738707"
    },
    {
      "id": 2,
      "title": "Heading 2",
      "content": "# Heading 2\nUpdated Content 2",
      "created_at": "2024-11-03T02:17:20.464899",
      "modified_at": "2024-11-03T04:06:34.742093"
    }
  ],
  "failed": []
}
```

It's implemented in the api to provide for performant concurrent database updates. Users who wish to interact with there notes programatically may prefer the [[#tree-update][/tree/UPDATE]] endpoint which provides a json with the hierarchy and content of the notes

## DELETE

```bash
curl -X POST http://localhost:37240/notes/flat \
    -H "Content-Type: application/json" \
    -d '{"title": "My New Note", "content": "This is the content of my note"}' | jq
```

```json title="RESULT"
{
  "id": 241,
  "title": "My New Note",
  "content": "This is the content of my note",
  "created_at": "2024-11-01T05:37:52.121274",
  "modified_at": "2024-11-01T05:37:52.121276"
}
```

```bash
curl -X DELETE http://localhost:37240/notes/flat/241 | jq
```

```json title="RESULT"
{
  "message": "Note 241 successfully deleted",
  "deleted_id": 241
}
```

## TODO HASH
### All

```bash
curl http://localhost:37240/notes/flat/hashes | jq
```

```json title="RESULT"
[
  {
    "id": 1,
    "hash": "57bcd1ded0ffdce6aaf5cec1a96acc1475963e4c9a04e480017532b8fe8e4513"
  },
  {
    "id": 2,
    "hash": "7662e0acc50fecc05e594aaac745a681064714a70eb24765fab515331113832b"
  },
  {
    "id": 3,
    "hash": "c2c06ce7d7797f8ee4d0d7e28ca5ba25306c0ec1b2533ee7b7922dd8cc62d51d"
  },
  {
    "id": 4,
    "hash": "749230d73540d19aee99398854c36cc6b39a8c79d66c96003693d9638b3c4c94"
  },
  {
    "id": 5,
    "hash": "e24fd787613e5512da2ff58459f01447cd034938f5da0256d39733b23e7948a4"
  },
  {
    "id": 6,
    "hash": "9503085a11722bf6a8adf5a9463700f8dcdb33865ce0d864c94bfd43a7a8487b"
  },
  {
    "id": 7,
    "hash": "ccf2067479289585e8d8306b8bdd8bf95ce1aa1c91d37b162ebcb7df93c30ef6"
  },
  {
    "id": 9,
    "hash": "753ed013103c10d0f888e231f78cd149af762a06d26ef1fd0f97eb034f279ac6"
  },
  {
    "id": 10,
    "hash": "a6af71022a2e3cf035ca20a54f4ba85f7e6eccce5b9a5a993afee2bce79ce423"
  },
  {
    "id": 11,
    "hash": "a47f77e3df4da475101f292c70f0c67345b9178e2c0b7a882ea7efa2a491bbd3"
  },
  {
    "id": 12,
    "hash": "54142d18f4f7e97e717d6cdb808dbeeb7a3568a9d2217d4f92085139b1c77c00"
  },
  {
    "id": 13,
    "hash": "375d32ebd12000d89da070cbbd41077025b7479cc68a380ae9f3282d836fccc3"
  },
  {
    "id": 24,
    "hash": "63730f9c64e671b5bd9a83dc19b4622226a8b7cf30023795e0c8be0e86829957"
  },
  {
    "id": 25,
    "hash": "2d5b1b75f2467d440468fcf70f36b55f90ebab7ec30e24dd7d5a4e09ad7f3347"
  },
  {
    "id": 26,
    "hash": "b2c0235b7952cc378b18d4986be2c608ed5a5b50c039e746bac4ff2443984bbf"
  },
  {
    "id": 27,
    "hash": "a47be0286419cd76d97bb3c1698ce2b43aa89a2150cfb2cb8d2e7e0e9f9207a5"
  },
  {
    "id": 28,
    "hash": "683bd023033a57f7d08377126f6f0afa1d84752fe6d83a97344a8f3b11137398"
  },
  {
    "id": 31,
    "hash": "f6ce0037717004128652ed54c83a046c3a152861a623bdd2c7b4e31a70aafbe0"
  },
  {
    "id": 39,
    "hash": "91ac53b5aa321e208a2395c3108a21c619598c904815629e3d9a332741079859"
  },
  {
    "id": 45,
    "hash": "d1eaf36d6a36266bd251c30607a9440bf8ddedb5001616ae2992816fbe0ecbc2"
  },
  {
    "id": 47,
    "hash": "adc20e78386e22f1ab73e35d6270e66abd4e4a89ad9016f23798b710659b67a0"
  },
  {
    "id": 48,
    "hash": "9eab386bb160d9bd7f97a4ab1b2bd7fa82122c87662f24f53d9f1d2842557e2e"
  },
  {
    "id": 49,
    "hash": "a6352f55b6c1afbe90b48f0e92026fb6f3d0cde69af83237a0675d7c8465f07c"
  },
  {
    "id": 50,
    "hash": "38cdda6d153458f5cf14e2b25c76dddcb7f1377414620b90c2dda3bc2a4d8e9a"
  },
  {
    "id": 51,
    "hash": "674ad85fc233e92039b475be1777f44d654f7729cfc1b4cad826ac9cc9feef95"
  },
  {
    "id": 52,
    "hash": "85af1dda99d3d70be05e4b38c5a56b878af0dc4426cc295375038213e6d031c9"
  },
  {
    "id": 54,
    "hash": "f18d5e8c716a54439663179ed392bfea02bbc9d0f7d22785b51bc9cd84ef93cf"
  },
  {
    "id": 56,
    "hash": "0fc1772a78e4e84f6393e6cf4dd5488ee1ee8041cbe37ee16d50df52d7b4440c"
  },
  {
    "id": 57,
    "hash": "33d484bd69f6395176d5300399f82f8f2c201a34ca42127bd8ccd9f765e5911d"
  },
  {
    "id": 60,
    "hash": "2e1947612db6aa468bee73e3d9d1611e3253b93f4937223f4163758c28fcab9f"
  },
  {
    "id": 61,
    "hash": "69f43461877f4774a8fa88f4d930a3dbb9954cf44d29dec5cd82461a3a05f9bb"
  },
  {
    "id": 62,
    "hash": "26ff51b1161b89685f99218af86e89bd48f60b12cf97fd2eaa65d6cb7bf0ef86"
  },
  {
    "id": 68,
    "hash": "50732615395b338539dbede179fd8ff6576ae68a8d5adf1b3e50d07773a4e1ec"
  },
  {
    "id": 73,
    "hash": "dea7244e8feeda715553b570242400d71de30909900b20ad783a6ba03476db5f"
  }
]
```

### Single
```bash
curl http://localhost:37240/notes/flat/1/hash
```

```bash
57bcd1ded0ffdce6aaf5cec1a96acc1475963e4c9a04e480017532b8fe8e4513
```

