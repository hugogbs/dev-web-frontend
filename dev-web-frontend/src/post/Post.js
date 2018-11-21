import React, { Component } from "react";
import "./Post.css";
import Comment from "../comment/Comment";
import { Collapse, Button, Card } from "reactstrap";

class Post extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  createCommentsList = () => {
    let commentsList = [];
    for (let i = 0; i < 5; i++) {
      commentsList.push(
        <div>
          <Comment />
        </div>
      );
    }

    return commentsList;
  };
  render() {
    return (
      <div className="Post">
        <p className="postTitle">Post bem bacana</p>
        <div className="postBody">
          <p>
            Ao ser invocado (ao usar o elemento do componente em questão) o
            mesmo é criado. O construtor do componente é invocado, de forma que
            possa ser utilizado. Um componente é criado para cada uma das
            invocações existentes. Depois de criado, o componente é renderizado
            (render). O processo de renderização envolve a criação de um DOM
            (Document Object Model) e a associação desse DOM com a página do
            usuário de fato.
          </p>
          <p>
            Terminada a fase de montagem, o componente é atualizado quando são
            detectadas alterações em seu estado. Isso pode acontecer tanto por
            uma alteração no estado do componente (setState) como pela inserção
            de novos propos no componente.
          </p>
          <p>
            Por fim, quando o componente não deve mais ser associado a página do
            usuário o mesmo é removido.
          </p>
        </div>
        <div className="reactionsDiv">
          <div class="alert alert-primary" role="alert">
            10 <i class="material-icons">trending_up</i>
          </div>
          <div class="alert alert-danger" role="alert">
            5 <i class="material-icons">trending_down</i>
          </div>
        </div>
        <div>
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
          >
            Exibir comentários
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <div className="commentsList">{this.createCommentsList()}</div>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Post;
