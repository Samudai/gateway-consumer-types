export type TwitterResponse = {
  id: string
  name: string
  img: string
  text: string
  links: string[]
  //"hashTags": ["#sketch", "#free", "#freebies", "#download"],
  date: string
  verified: boolean
  comments: number
  shared: number
  likes: number
}
