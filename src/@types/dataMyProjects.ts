export interface IMyProjects {
  name: string
  imageLink: string
  RepoGithub: IRepoGithub[]
}

export interface IRepoGithub {
  repoName: string
  repoLink: string
}
