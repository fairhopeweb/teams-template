import { TeamId, TeamName } from "../_model/_model.ts"
import ButtonModal from "../islands/ButtonModal.tsx"
import ExpModal from "../islands/ExpModal.tsx"

interface Props {
  teamId: TeamId
  teamName: TeamName
  memberQuery: string
}

export default function ActionBox({ teamId, teamName, memberQuery }: Props) {
  return (
    <div class="flex justify-between p-2 border-b-4">
      <form>
        <input
          type="text"
          name="name"
          value={memberQuery}
          class="input input-bordered input-secondary w-full max-w-xs"
          placeholder="Search by name"
        >
        </input>
        <button type="submit" />
      </form>
      {/* <ButtonModal teamId={teamId} teamName={teamName} /> */}
      <ExpModal teamId={teamId} teamName={teamName} />
      <label htmlFor="my-modal-3" className="btn btn-primary">open modal</label>
    </div>
  )
}
