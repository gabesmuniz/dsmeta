import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title"> Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992px">ID</th>
                            <th className="show576px">Data</th>
                            <th>Vendedor</th>
                            <th className="show992px">Visitas</th>
                            <th className="show992px">Vendas</th>
                            <th>Total</th>
                            <th>Notificar Vendedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992px">#123</td>
                            <td className="show576px">10/07/2022</td>
                            <td>Gabriel</td>
                            <td className="show992px">18</td>
                            <td className="show992px">15</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992px">#123</td>
                            <td className="show576px">10/07/2022</td>
                            <td>Gabriel</td>
                            <td className="show992px">18</td>
                            <td className="show992px">15</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992px">#123</td>
                            <td className="show576px">10/07/2022</td>
                            <td>Gabriel</td>
                            <td className="show992px">18</td>
                            <td className="show992px">15</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard
