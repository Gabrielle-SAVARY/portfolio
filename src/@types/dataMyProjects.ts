export interface IMyProjects {
  id: number
  name: string
  legend: string
  imageLink: string
  RepoGithub: IRepoGithub[]
}

export interface IRepoGithub {
  repoName: string
  repoLink: string
}
