import DashboardHeading from "@/app/components/DashboardHeading";
import DraftCard from "@/app/components/DraftCard";

const drafts = () => {
  const drafts = [
    {
      _id: 12,
      draftId: 1,
      editorId: "12",
      editorUsername: "Editor",
      title: "My First Upload",
      description: "This is my first upload",
      thumbnail: "https://placeholder.com/300X175",
      timestamp: "2021-06-09T13:00:00.000Z",
      url: "https://placeholder.com/300X200",
      tags: ["tag1", "tag2"],
      size: 100,
      status: 1,
      issues: [],
    },
    {
      _id: 123,
      draftId: 2,
      editorId: "12",
      editorUsername: "Editor",
      title: "My First Upload",
      description: "This is my first upload",
      thumbnail: "https://placeholder.com/300X175",
      timestamp: "2021-06-09T13:00:00.000Z",
      url: "https://placeholder.com/300X200",
      size: 100,
      status: -1,
      issues: [],
    },
    {
      _id: 1234,
      draftId: 3,
      editorId: "12",
      editorUsername: "Editor",
      title: "My First Upload",
      description: "This is my first upload",
      thumbnail: "https://placeholder.com/300X175",
      timestamp: "2021-06-09T13:00:00.000Z",
      url: "https://placeholder.com/300X200",
      size: 100,
      status: 0,
      issues: [],
    },
    {
      _id: 1234,
      draftId: 4,
      editorId: "12",
      editorUsername: "Editor",
      title: "My First Upload",
      description: "This is my first upload",
      thumbnail: "https://placeholder.com/300X175",
      timestamp: "2021-06-09T13:00:00.000Z",
      url: "https://placeholder.com/300X200",
      size: 100,
      status: 0,
      issues: [],
    },
  ];

  return (
    <>
      <DashboardHeading text="Drafts" count={drafts.length} />

      <div className="flex flex-wrap gap-10 justify-center mt-5">
        {drafts.map((draft, index) => (
          <div key={index}>
            <DraftCard details={draft} />
          </div>
        ))}
      </div>
    </>
  );
};

export default drafts;
