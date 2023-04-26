FROM grafana/grafana:latest

# Install a custom plugin
RUN grafana-cli plugins install grafana-piechart-panel && \
    grafana-cli plugins install grafana-worldmap-panel && \
    grafana-cli plugins install grafana-clock-panel && \
    grafana-cli plugins install grafana-simple-json-datasource && \
    grafana-cli plugins install grafana-polystat-panel && \
    grafana-cli plugins install grafana-prometheus-datasource


# Copy configuration file
COPY ./grafana.ini /etc/grafana/grafana.ini

# Expose port
EXPOSE 8080

# Set default command
CMD ["grafana-server"]
