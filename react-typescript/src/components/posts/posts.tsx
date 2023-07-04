import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface IPost {
  title?: string,
  id?: number,
}

type PostState = {
  data: IPost[],
}

interface IPosts extends RouteComponentProps {
  test?: number,
}


interface HttpReaponse<T> extends Response {
  parsedBody?: T;
  status: number;
  redirect?: boolean
}

export async function http<T>(request: string): Promise<HttpReaponse<T>> {
  const response: HttpReaponse<T> = await fetch(request);
  response.parsedBody = await response.json()
  return response
}


// export async function http<T>(request: string): Promise<T> {
//   const respponse = await fetch(request)
//   const body =  await respponse.json()
//   return body
// }

class Posts extends Component<IPosts, PostState> {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => res.json() as Promise<IPost[]>)
      .then(data => { this.setState({ data }) })
  }


  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Posts:</h1>
        <ul className="posts">
          {data.map(({ id, title }: IPost) =>
            <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
          )}
        </ul>
      </div>
    );
  }
};

export default Posts;