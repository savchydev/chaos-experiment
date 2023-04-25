FROM grafana/grafana:latest

# Install a custom plugin
RUN grafana-cli plugins install my-plugin

# Copy configuration file
COPY my-config.ini /etc/grafana/grafana.ini

# Expose port
EXPOSE 8080

# Set default command
CMD ["grafana-server"]
