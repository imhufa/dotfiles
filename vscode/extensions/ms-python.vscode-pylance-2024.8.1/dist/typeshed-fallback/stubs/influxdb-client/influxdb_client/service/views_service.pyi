from _typeshed import Incomplete

from influxdb_client.service._base_service import _BaseService

class ViewsService(_BaseService):
    def __init__(self, api_client: Incomplete | None = None) -> None: ...
    def get_dashboards_id_cells_id_view(self, dashboard_id, cell_id, **kwargs): ...
    def get_dashboards_id_cells_id_view_with_http_info(self, dashboard_id, cell_id, **kwargs): ...
    async def get_dashboards_id_cells_id_view_async(self, dashboard_id, cell_id, **kwargs): ...
    def patch_dashboards_id_cells_id_view(self, dashboard_id, cell_id, view, **kwargs): ...
    def patch_dashboards_id_cells_id_view_with_http_info(self, dashboard_id, cell_id, view, **kwargs): ...
    async def patch_dashboards_id_cells_id_view_async(self, dashboard_id, cell_id, view, **kwargs): ...
