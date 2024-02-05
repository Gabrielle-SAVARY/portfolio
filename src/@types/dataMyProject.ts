export interface IMyProject {
  id: number
  name: string
  legend: string
  description: string
  imageLink: string
  repoGithub: IRepoGithub[]
}

export interface IRepoGithub {
  repoName: string
  repoLink: string
}
