export class Movie {
  Title?: string
  Year?: string
  imdbID?: string
  Type?: string
  Poster?: string
}

export class Movies {
  Response?: boolean
  Search?: Movie[]
  TotalResults?: number
}
