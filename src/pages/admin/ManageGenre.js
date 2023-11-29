import { Fragment } from "react";

function ManageGenre() {
    return (
        <Fragment>
            <main id="main-content" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Quản lý thể loại</h2>
                        <button className="btn btn-primary" onclick="openAddGenreModal()">
                            <i className="fa-solid fa-plus"></i> Thêm
                        </button>
                    </div>

                    <div className="table-responsive text-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Thể loại</th>
                                    <th>Trạng thái</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="genreRow">
                                    <td><a href="#">Action</a></td>
                                    <td><a href="#">True</a></td>
                                    <td>
                                        <button className="btn btn-warning" onclick="editGenre()"><i
                                            className="fa-regular fa-pen-to-square"></i></button>
                                        <button className="btn btn-danger" onclick="deleteGenre()"><i
                                            className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default ManageGenre;