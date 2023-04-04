import { MaintainerRole, Team, TeamId } from "./_model.ts"
import { AdminRole, UserRole } from "./_model.ts"

export const sampleTeam: Team = {
  id: "t1",
  name: "Awesome Team",
  members: [
    {
      id: "u1",
      name: "Alice",
      githubId: "alice123",
      avatarUrl: "https://avatars.githubusercontent.com/u/12516060?v=4",
      teams: ["id1"],
      role: AdminRole,
      membershipStatus: "Accepted",
      eventHistory: [],
    },
    {
      id: "u3",
      name: "Carol",
      githubId: "carol123",
      avatarUrl: "https://avatars.githubusercontent.com/u/12516060?v=4",
      teams: ["id1"],
      role: UserRole,
      membershipStatus: "Accepted",
      eventHistory: [],
    },
  ],
  eventHistory: [
    {
      date: new Date("2023-03-20T10:00:00Z"),
      type: "TeamInvitation",
      from: {
        id: "u2",
        name: "Bob",
        githubId: "bob123",
        avatarUrl: "https://avatars.githubusercontent.com/u/12516060?v=4",
        teams: ["id1"],
        role: AdminRole,
        membershipStatus: "Accepted",
        eventHistory: [],
      },
      to: {
        id: "u1",
        name: "Alice",
        githubId: "alice123",
        avatarUrl: "https://avatars.githubusercontent.com/u/12516060?v=4",
        teams: ["id1"],
        role: AdminRole,
        membershipStatus: "Accepted",
        eventHistory: [],
      },
    },
    {
      date: new Date("2023-03-25T15:30:00Z"),
      type: "TeamInvitation",
      from: {
        id: "u1",
        name: "Alice",
        githubId: "alice123",
        avatarUrl: "https://avatars.githubusercontent.com/u/12516060?v=4",
        teams: ["id1"],
        role: AdminRole,
        membershipStatus: "Accepted",
        eventHistory: [],
      },
      to: {
        id: "u3",
        name: "Carol",
        githubId: "carol123",
        avatarUrl: "https://avatars.githubusercontent.com/u/12516060?v=4",
        teams: ["id1"],
        role: UserRole,
        membershipStatus: "Accepted",
        eventHistory: [],
      },
    },
  ],
  teams: [],
  visiblity: true,
}

export const sampleTeam2: Team = {
  id: "t1" as TeamId,
  name: "Awesome Team",
  members: [
    {
      id: "u1",
      name: "Alice",
      githubId: "alice",
      avatarUrl: "https://avatars.githubusercontent.com/u/00001?v=4",
      teams: ["t1"],
      role: AdminRole,
      membershipStatus: "Accepted",
      eventHistory: [],
    },
    {
      id: "u2",
      name: "Bob",
      githubId: "mojombo",
      avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
      teams: ["t1"],
      role: UserRole,
      membershipStatus: "Accepted",
      eventHistory: [],
    },
    {
      id: "u3",
      name: "Carol",
      githubId: "defunkt",
      avatarUrl: "https://avatars.githubusercontent.com/u/2?v=4",
      teams: ["t1"],
      role: UserRole,
      membershipStatus: "Accepted",
      eventHistory: [],
    },
    {
      id: "u4",
      name: "Dave",
      githubId: "pjhyett",
      avatarUrl: "https://avatars.githubusercontent.com/u/3?v=4",
      teams: ["t1"],
      role: MaintainerRole,
      membershipStatus: "Accepted",
      eventHistory: [],
    },
    {
      id: "u5",
      name: "Eve",
      githubId: "wycats",
      avatarUrl: "https://avatars.githubusercontent.com/u/4?v=4",
      teams: ["t1"],
      role: UserRole,
      membershipStatus: "Accepted",
      eventHistory: [],
    },
  ],
  eventHistory: [],
  teams: [],
  visiblity: true,
}

localStorage.setItem(
  "crosshatch",
  JSON.stringify(sampleTeam2, (_, value) => value instanceof Set ? [...value] : value),
)

// Array.from(sampleTeam.members).map((obj) => console.log(JSON.stringify(obj)))