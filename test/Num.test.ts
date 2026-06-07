import { AccessEnums, ProjectEnums } from '../src'

// Enums are the only runtime artifacts emitted by this types package; this
// smoke test asserts the public barrel loads and a few values resolve.
describe('enums barrel', () => {
  it('exposes namespaced enums from the index', () => {
    expect(ProjectEnums.LinkType.DAO).toBe('dao')
    expect(ProjectEnums.TaskStatus.TODO).toBe('to-do')
  })

  it('keeps intentionally shared AccessLevels tiers', () => {
    expect(AccessEnums.AccessLevels.manage_job).toBe(
      AccessEnums.AccessLevels.manage_project,
    )
  })
})
